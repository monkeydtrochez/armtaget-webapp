
import { ref, child, get} from "firebase/database";

export async function fetchStringValues(database) {
    const dbRef = ref(database);
    let productAreaTexts;

    get(child(dbRef, 'productAreaTexts'))
    .then((snapshot) => {
        if(snapshot.exists()) {
            productAreaTexts = snapshot.val();
            console.log(snapshot.val());
        }
    })
    .catch((error) => {
        console.log("Error occured! ",  error);
    });

    return new Promise(() => {productAreaTexts});
}