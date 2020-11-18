import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import IAP from 'react-native-iap';
import {Ellipse} from 'react-native-svg';

const Subscribe = (props) => {
  const [user, setUser] = useState({
    name: 'Jonas',
    subscription: undefined,
  });
  const [products, setProducts] = useState([]);

  let productIds = ['1'];

  useEffect(() => {
    IAP.getProducts(productIds).then((res) => setProducts(res));

    IAP.getPurchaseHistory().then((res) =>
      console.log('purchase history', res),
    );

    const purchaseUpdateScription = IAP.purchaseUpdatedListener((purchase) => {
      const receipt = purchase.transactionReceipt;
      if (receipt) {
        //call to backend
        console.log('receipt', receipt);
        IAP.finishTransaction(purchase);
      }
    });

    return () => {
      purchaseUpdateScription.remove();
    };
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
        {products.map((ele) => (
          <View>
            <Text>{ele.description}</Text>
            <Button
              title="Subscribe"
              onPress={() => IAP.requestPurchase(ele.productId)}
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Subscribe;
