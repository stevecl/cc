@Controller("/book")
class BookController {
    @RequestMapping({
        methods: RequestMethod.GET,
        url:'all'
    })
    public getAllBooks() {

    }
}

// /book/all get