
// --> When you type an email or a name returns an array that contains them.
export const search_All_Users =  (Current_Array,string) =>
{
    return Current_Array.filter((user) =>  (user.name.includes(string) || user.email.includes(string)));
}



 //-->updatinig items
export const  Func_UpdateUser = (Current_Array,newUser) =>
{
  // -->Look for the location of a unique number in the array and place new objects.
    const userIndex = Find__To_UserIndex(Current_Array,newUser.id);
    Current_Array[userIndex] = newUser; 

    return Current_Array;
}

// find  the location of a unique number in the array.
export const Find__To_UserIndex = (Current_Array,id) =>
{
    return Current_Array.findIndex((user)=> user.id==id);
}



//==> to Add  new items in to arary
export const Helep_Array = (array,newObj) =>
{
    array.push(newObj)
    return array;
}

//--> Add a new user in to Arary
export const Func_AddUser = (array,newObj) =>
{
    newObj.id = array[array.length-1].id + 1; /* The new User Gets the id of the last id user +1 */
    
    return Helep_Array(array,newObj)
}

/* ---> Removes Object from array */
export const DeleteItems = (array,idObj) =>
{
    const objIndex = Find__To_UserIndex(array,idObj);
    array.splice(objIndex,1);

    return array;
}

/* if the the Task id is  Completed that means if the true */
export const MarkTaskComplete = (todosArray,idTask) =>
{
    const todo = todosArray.findIndex((todo) => todo.id==idTask);
    todosArray[todo].completed = true;

    return todosArray;
}
