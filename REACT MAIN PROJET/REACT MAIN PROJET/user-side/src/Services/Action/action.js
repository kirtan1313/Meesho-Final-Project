import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const addProducts = (addData) => {
    return {
        type: 'ADDPRODUCTS',
        payload: addData
    };
};

export const getProductsAsync = () => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'products'));
            let proData = [];

            querySnapshot.forEach((doc) => {
                proData = [...proData, doc.data()];
            });

            dispatch(addProducts(proData));
        } catch (err) {
            console.log("Error fetching documents: ", err);
        }
    };
};