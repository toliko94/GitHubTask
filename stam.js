const { TestScheduler } = require('jest');
const functions = require('./functions');


//function to check jest is working
/*
test('add2+2 to 4', () =>
{
    expect(functions.add(2,2)).toBe(4);
});
*/
test ('if user is in our database',()=>
{
    expect(functions.SignIn("wepo4u@gmail.com","123456")).toBe(1);

});


test ('if user is not in our database',()=>
{
    expect(functions.SignIn("Boazxxxx@gmail.com","123456")).toBe(0);

});
test ('get all child data by Id',(uderID)=>
{
    expect(functions.FetchAllData()).toBe(1);

});
test ('get all child data by Id',(uderID)=>
{
    expect(functions.FetchAllData()).toBe(0);

});
test ('delete a user by Id',()=>
{
    expect(functions.DeleteOU()).toBe(1);

});
test ('delete a user by Id',()=>
{
    expect(functions.DeleteOU()).toBe(0);

});
test ('update user points by id and a number',()=>
{
    expect(functions.Addpoints()).toBe(1);

});
test ('update user points by id and a number',()=>
{
    expect(functions.Addpoints()).toBe(0);

});
test ('write the new points to data',(updatedform, ID)=>
{
    expect(functions.newpoints()).toBe(1);

});
test ('rite the new points to data',(updatedform, ID)=>
{
    expect(functions.newpoints()).toBe(0);

});
test ('Function that read user details by id and return data in package',(userId)=>
{
    expect(functions.readUserDetailsO()).toBe(1);

});
test ('Function that read user details by id and return data in package',(userId)=>
{
    expect(functions.readUserDetailsO()).toBe(0);

});
test ('function that return data base by value',()=>
{
    expect(functions.SearchO()).toBe(0);

});
test ('function that return data base by value',()=>
{
    expect(functions.SearchO()).toBe(0);

});
test ('Function that get values and display it when ever you want in div',()=>
{
    expect(functions.addItemsToList(Company_name,Msg,Phone)).toBe(1);

});
test ('function that return data base by value',()=>
{
    expect(functions.addItemsToList(Company_name,Msg,Phone)).toBe(0);

});
test ('function that run at the beggining of the load and display the image from the gallery',()=>
{
    expect(functions.displayProfilepic(userId)).toBe(1);

});
test ('function that run at the beggining of the load and display the image from the gallery',()=>
{
    expect(functions.displayProfilepic(userId)).toBe(0);

});
test ('function that run at the beggining of the load and display the image from the gallery',()=>
{
    expect(functions.displayNumofCompletedReq()).toBe(1);

});
test ('function return a number of completed requests',()=>
{
    expect(functions.displayNumofCompletedReq()).toBe(0);

});

