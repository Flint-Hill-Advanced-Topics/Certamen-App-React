class User
{
    myUserId = "";
    myName = "";
    
    constructor (name, id) {
        this.myName = name;
        this.myUserId = id;
    }

    get getName()
    {
        return this.myName;
    }
    
    get getUserId()
    {
        return this.myUserId;
    }
}

export default User;