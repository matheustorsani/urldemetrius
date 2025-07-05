import { db } from "./index";
import {
    collection,
    addDoc,
    getDocs,
    orderBy,
    query,
    Timestamp,
} from "firebase/firestore";

export async function addPost(
    title: string,
    content: string,
    creator: string,
    img?: string
) {
    try {
        await addDoc(collection(db, "posts"), {
            title,
            content,
            creator,
            img,
            created_at: Timestamp.now(),
        });
    } catch (error) {
        console.error("Erro ao adicionar post:", error);
    }
}

export async function getPosts() {
    const postsCol = collection(db, "posts");
    const q = query(postsCol, orderBy("created_at", "desc"));

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            title: data.title,
            content: data.content ?? data.conteudo,
            creator: data.creator ?? data.nome ?? 'anonymous',
            img: data.img || ''
        };
    });
}