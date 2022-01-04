
import { ref, child, get} from "firebase/database";

export async function fetchStringValues(database) {
    const dbRef = ref(database);
    return new Promise((resolve, reject) => {
        get(child(dbRef, 'productAreaTexts'))
        .then((snapshot) => {
            if(snapshot.exists()) {
                const productAreaTexts = snapshot.val();
                resolve({productAreaTexts});
            } else {
                reject("No data was found!");
            }
        })
        .catch((error) => {
            console.log("Error occured! ",  error);
        });
    });
}