const modalDom=document.querySelector('.edit-btn')
const modal=new bootstrap.Modal(modalDom)
modalDom.addEventListener
('click',()=>{
    console.log("点击了登录");
    modal.show();
})
modalDom.addEventListener
('click',()=>{
  modal.hied();
})