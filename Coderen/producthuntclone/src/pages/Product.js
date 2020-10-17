import React from "react";
import {IonPage, IonContent} from "@ionic/react";
import SmallHeader from '../components/Header/SmallHeader';
import LargeHeader from '../components/Header/LargeHeader';

const Product = () => {
    return(
        <IonPage>
            <SmallHeader title="Product" />
            <IonContent fullscreen>
                <LargeHeader title="Product" />
            </IonContent>
        </IonPage>
    );
};

export default Product;