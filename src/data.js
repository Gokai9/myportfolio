import skull from "./assets/skull.png";
import port from "./assets/port.png";

export const skill = [
    "GO LANG",
    "RUST",
    "JAVASCRIPT",
    "REACT",
    "NODE JS",
    "MONGO DB",
    "PYTHON",
    "TYPESCRIPT",
    "HTML",
    "CSS"
];

export const projects = [
    {
        id: 1,
        name: "Portofolio",
        description:
            "Project ini dibuat dengan react framework dengan tujuan untuk membuat website pribadi dan mendeploynya ke netlify",
        screenshot: port,
        sourcecode: "https://github.com/Gokai9/myportfolio",
        site: "https://www.tasimblh.xyz/",
        finish: true
    },
    {
        id: 2,
        name: "SkullShop",
        description:
            "Project ini dibuat menggunakan react framework dan commerce js. user dapat menambahkan barang ke keranjang dan dapat menghapusnya juga, masih terdapat beberapa fitur yang masih belum dibuat seperti auntetikasi dan pembayaran.",
        screenshot: skull,
        sourcecode: "https://github.com/Gokai9/commerce-react",
        site: "https://cranky-heisenberg-3c4914.netlify.app/",
        finish: true
    }
];
