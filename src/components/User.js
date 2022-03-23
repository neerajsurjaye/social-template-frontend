import { useParams } from "react-router-dom";
import PostList from "./PostList";
import UserCard from "./UserCard";

let User = () => {

    let { id } = useParams();

    return <div className="user">

        <UserCard id={id}></UserCard>
        <PostList user={id}></PostList>
    </div>
}

export default User;