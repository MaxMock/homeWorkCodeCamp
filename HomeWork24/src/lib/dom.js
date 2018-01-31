export class domuti{
    static setText(id,text){
        let elem=document.getElementById(id)
        elem.innerText=text
    }
     getText(id){
         let elem = document.getElementById(id).value
         return elem
     }
     static openWindow () {
        this.win = window.open("list.html", "",
        "resizable=yes,top=100,left=500,width=500,height=600")
        }
        static closeWindow () {
        if (this.win) {
        this.win.close()
        }
        }
        static editItem (id, text) {
            let elem = document.getElementById(id)
            elem.innerText = text
            }
            static removeItem (removeId, parentId) {
                let elem = document.getElementById(removeId)
                let parent = document.getElementById(parentId)
                parent.removeChild(elem)
                }

}