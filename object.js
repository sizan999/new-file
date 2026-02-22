const person = {
    name: 'sohan',
    age: 23,
    friends: ['sizan', 'sohan', 'ashiq'],
    details: {
        job: 'Yes',
        ismarried: true,
        status: 'not found',
        father: {
            name: 'nazrul islam'
        }
    }

}
console.log(person.details.mother?.name)