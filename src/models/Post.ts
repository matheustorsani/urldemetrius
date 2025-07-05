export default class Post {
    constructor(
        public title: string,
        public content: string,
        public creator: string = 'anonymous',
        public img?: string
    ) { }
}
