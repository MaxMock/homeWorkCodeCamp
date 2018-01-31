import { domuti as dom } from "./../src/lib"

import { fetchApi } from './middlewares'
import bookPage from './views/bookPage.html'
import bookItems from './views/bookItem.html'
import { templateBinder } from './lib/template'
let hi;
$('#app').html(bookPage)
let api = new fetchApi()

api.get('http://localhost:3000/books')
.then(res => {
  res.json().then(result => {
    console.log(result);
    let template = templateBinder.bind(bookItems, result)
    $('#bookList').append(template)
  })
})


let getdom = new dom ();
let getdomedit = new dom ();
 function addclick(){
dom.editItem('modaltitle',"ADD");
 }

function btnasveclick(){
    
    let BookId = getdom.getText('inputBookId');
    let Title = getdom.getText('inpuTitle');
    let SalePrice = getdom.getText('inputSalePrice');
    let PromotionDate = getdom.getText('inputPromotionDate');
    let Image = getdom.getText("inputImage") 
    let div = document.createElement("div");
    div.className="col-sm-3"
    let chack = document.getElementById("modaltitle").innerText
   
if(chack=="ADD")
{

  div.id= BookId;
  div.innerHTML=`      
  <div class="csscard Card" id="${BookId}">
  <p hidden><label id="Bookid_${BookId}">${BookId}</label></p>
<p><h1 id="cardTitle_${BookId}">${Title}</h1></p>
  <img class="card-img-top" id="inputimg_${BookId}" src="${Image}" alt="Card image cap">
  <div class="card-body">
      <p hidden><label for="PromotionDate" id="PromotionDate_${BookId}" style="padding-right:5px">${PromotionDate}</label>          
  <p>Price :<label for="price" id="price_${BookId}" style="padding-right:5px">50</label>$
    <button type="button" name="btnedit" onclick="edit('${BookId}')" data-id="1" class="btn btn-success "   data-toggle="modal" data-target="#myModal" >
       Edit
       <span class="glyphicon glyphicon-wrench" style="color:white"></span>
    </button>
          <button type="button" name="btndelete" onclick="deletecard(${BookId})" data-id="1" class="btn btn-danger btndelete" >
       Delete
       <span class="glyphicon glyphicon-trash" style="color:white"></span>
    </button>
    </p>  
  </div>
</div>
  `
  console.log(div);
  // document.getElementById("rowcard").appendChild(div);
  $('#bookList').append(div)
document.getElementById("myForm").reset();
  const url = 'http://localhost:3000/books';
  // The data we are going to send in our request
  let data = {
    "isbn" : BookId ,
    "cardid" : BookId ,
    "bookid" : `Bookid_${BookId}` ,
    "BookId" : BookId,
    "cardTitleisbn":`cardTitle_${BookId}`,
"inputimg_isbn" : `inputimg_${BookId}` ,
"PromotionDate_isbn" : `PromotionDate_${BookId}` ,
"PromotionDate":PromotionDate,
"price_isbn" : `price_${BookId}` ,
"editisbn" : `edit('${BookId}')`,
"deletecardisbn" : `deletecard('${BookId}')` ,
    "title" : Title ,
    "price" : SalePrice,
    "imageUrl" :Image
  }


  fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data),
  headers: new Headers({
  'Content-Type': 'application/json'
  })
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response))
}
else{
 
  console.log(BookId)
dom.setText(`Bookid_${hi}`,BookId)
dom.setText(`cardTitle_${hi}`,Title)
dom.setText(`price_${hi}`,SalePrice)
dom.setText(`PromotionDate_${hi}`,PromotionDate)
document.getElementById(`inputimg_${hi}`).src=Image

let urlupdate = 'http://localhost:3000/books/'+BookId;
console.log(urlupdate);
let dataupdate = {
  "isbn":BookId ,
  "cardid":BookId ,
  "bookid":`Bookid_${BookId}` ,
  "BookId":BookId,
  "cardTitleisbn":`cardTitle_${BookId}`,
"inputimg_isbn" : `inputimg_${BookId}` ,
"PromotionDate_isbn" : `PromotionDate_${BookId}` ,
"PromotionDate":PromotionDate,
"price_isbn" :`price_${BookId}` ,
"editisbn" :`edit('${BookId}')`,
"deletecardisbn":`deletecard('${BookId}')` ,
  "title":Title ,
  "price":SalePrice,
  "imageUrl":Image
}
console.log(dataupdate)
fetch(urlupdate, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(dataupdate),
  headers: new Headers({
  'Content-Type': 'application/json'
  })
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response))
  document.getElementById("myForm").reset();
}
$('#myModal').modal('hide');

}


 function edit(id){ 
   hi =id;
  dom.editItem('modaltitle',"EDIT")
  document.getElementById('inputBookId').value =document.getElementById('Bookid_'+id).innerText;
  document.getElementById('inpuTitle').value=document.getElementById('cardTitle_'+id).innerText;
  document.getElementById('inputSalePrice').value=document.getElementById('price_'+id).innerText;
  document.getElementById('inputPromotionDate').value=document.getElementById('PromotionDate_'+id).innerText;
  document.getElementById('inputImage').value=document.getElementById('inputimg_'+id).src;
 
}


function deletecard(id)
{
  var r = confirm('Are you sure to delete item '+id+' y/n ')
  if(r == true){
    dom.removeItem(id,'rowcard')
    let urldelete = 'http://localhost:3000/books'
     fetch(urldelete + '/' + id, {
      method: 'delete'
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
  }else{

  }
}
function myfunction(id)
{
 console.log(id);
}

window.myfunction = myfunction
window.deletecard = deletecard
window.btnasveclick=btnasveclick
window.addclick=addclick
window.edit=edit