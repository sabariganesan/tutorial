import { Button, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";

function EffectComponent() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mathKey, SetMathKey] = useState(1);
  const [mathResult, setMathResult] = useState(2);

  //   useEffect(()=>{},[]) syntax

  useEffect(() => {
    // component did mount
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(({ products }) => setProduct(products))
      .catch(console.log)
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    // component did update
    setMathResult(mathKey * 2);
  }, [mathKey]);

  useEffect(() => {
    // component will un mount
    return () => {};
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
  ];

  return (
    <div className="p-5">
      <p className="text-lg font-medium">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic mollitia
        deleniti, optio reprehenderit debitis saepe maiores magnam nostrum
        doloremque doloribus tenetur. Suscipit, nihil assumenda. Aperiam,
        molestias! Quas eum labore id?
      </p>
      <small>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        maxime omnis ad! Eum atque consequuntur id nulla soluta aliquam aliquid
        ea recusandae nesciunt quae! Voluptatem illo nisi fugiat at officiis!
      </small>
      <section className="py-6">
        {isLoading ? (
          <div className="h-[350px] flex justify-center items-center">
            <Spin />
          </div>
        ) : (
          <Table dataSource={product} columns={columns} size="small" />
        )}
      </section>
      <section>
        <p className="text-lg font-medium flex justify-between items-center">
          <span>Math table</span>
          <Button onClick={() => SetMathKey((count) => count + 1)}>
            Increment
          </Button>
        </p>
        <ul>
          <li>
            {mathKey} x 2 = {mathResult}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default EffectComponent;
