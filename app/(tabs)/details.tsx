import { Image, StyleSheet, View, Text } from "react-native";
import React, { useEffect } from "react";
import DescribeCard from "@/components/DescribeCard";
import { ScrollView } from "react-native-gesture-handler";

export default function Details(){
    return(
        <ScrollView>
            <DescribeCard
                    imageSource={require('../../assets/images/dog.png')}
                    description="The Labrador Retriever, commonly known as the Lab, is a medium to large-sized dog renowned for its friendly and outgoing nature. Labs typically weigh between 55 to 80 pounds and stand about 21.5 to 24.5 inches tall at the shoulder. They have a short, dense, and water-resistant double coat that comes in three main colors: black, yellow, and chocolate. Labs are well-loved for their gentle demeanor, making them great companions for children and other pets. Their high intelligence and eagerness to please make them highly trainable. However, they are also energetic dogs that require regular exercise and enjoy activities like fetch, swimming, and running. With a typical lifespan of 10 to 12 years, Labs are generally healthy but can be prone to hip and elbow dysplasia, among other common health issues. Overall, the Labrador Retriever is a versatile and affectionate breed, well-suited to both families and individuals."
                />
        </ScrollView>
        
    )
}