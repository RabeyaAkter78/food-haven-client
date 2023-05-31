import { Helmet } from "react-helmet-async";
import banner2 from '../../../assets/shop/banner2.jpg'
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import UseMenu from "../../../Hoocks/UseMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {

    const categories = ['pizza', 'salad', 'soup', 'desserts', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabindex] = useState(initialIndex);
    const [menu] = UseMenu();



    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');


    return (
        <div>
            <Helmet>
                <title>Food Haven | Order Food</title>
            </Helmet>
            <Cover
                img={banner2}
                title={"ORDER FOOD"}
            ></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                <TabList>
                    <Tab>Pizza</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;