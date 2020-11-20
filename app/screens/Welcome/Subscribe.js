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

    return () => {
      purchaseUpdateScription.remove();
    };
  }, []);

  const purchaseUpdateScription = IAP.purchaseUpdatedListener((purchase) => {
    const receipt = purchase.transactionReceipt;
    console.log('receipt', receipt);
    if (receipt) {
      //call to backend
      console.log('receipt', receipt);
      IAP.finishTransaction(purchase);
    }
  });

  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
        {products.map((ele, indx) => (
          <View key={indx}>
            <Text>{ele.description}</Text>
            <Text>{ele.productId}</Text>
            <Button
              title="Subscribe"
              onPress={() =>
                IAP.requestPurchase(ele.productId).then((res) =>
                  console.log(res),
                )
              }
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Subscribe;
