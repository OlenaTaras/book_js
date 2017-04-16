var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };


function printList(list){
 var tmp=list;
 while(tmp){
  console.log(tmp)
  tmp=tmp.next;

 }
}

//printList(list);


function recursion(list){
  tmp=list;
  console.log(tmp);
  tmp=list.value;
  if(list.value==list.next){recursion(tmp)}
};
recursion(list);

