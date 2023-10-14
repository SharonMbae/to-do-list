document.addEventListener('DOMContentLoaded', function(){
   const new_task_input = document.getElementById('new_task_input');
   const btn = document.getElementById('btn');
   const list = document.getElementById('list');
 
   btn.addEventListener('click', function(){
      event.preventDefault();
     const trimmed_text = new_task_input.value.trim();
     
     if (trimmed_text !== "") {
       const listItem = document.createElement('li');
       listItem.textContent = trimmed_text;
       listItem.className = 'todo-item';
       listItem.dataset.completed = 'false';

       const deleteButton = document.createElement('button');
       deleteButton.textContent = 'Delete';
       deleteButton.className = 'delete-button';
       deleteButton.addEventListener('click', function() {
         listItem.remove(); 
       });

       listItem.addEventListener('click', function() {
         if (listItem.dataset.completed === 'false') {
           listItem.dataset.completed = 'true';
           listItem.style.textDecoration = 'line-through'; 
         } else {
           listItem.dataset.completed = 'false';
           listItem.style.textDecoration = 'none'; 
         }
       });

       
      
       listItem.appendChild(deleteButton);
 
       
       list.appendChild(listItem);
 
      
       new_task_input.value = '';
     }
   });
 });