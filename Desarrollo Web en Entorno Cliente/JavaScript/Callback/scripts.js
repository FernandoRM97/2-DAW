
const array = [

{
	id : 1,
	nombre : 'Fernando'
},
{
	id : 2,
	nombre : 'Raúl'
},
{
	id : 3,
	nombre : 'Juanma'
},
{
	id : 4,
	nombre : 'Robert'
}

]


const getUser = (id,cb) => {

	const user = array.find(user => user.id == id)

	if(!user) cb(`no existe ${id}`)
	else cb(null,user)

}


getUser(3,(err,user) => {

	if(err) return console.log(err)
	console.log(`User name is ${user.nombre}`)

})