import { useState, useEffect, useContext } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

import { api } from "../../services/api";

import { ProductProps } from "../home";

import { BsCartPlus } from "react-icons/bs";

import toast from "react-hot-toast";

export function ProductDetail() {
  const [product, setProduct] = useState<ProductProps>();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  const { addItemCart } = useContext(CartContext);

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);

      setProduct(response.data);
      setLoading(false);
    }

    getProduct();
  }, [id]);

  function handleAddItem(product: ProductProps) {
    toast.success("Produto adicionado no carrinho!", {
      style: {
        borderRadius: 10,
        backgroundColor: "#121212",
        color: "#fff",
      },
    });
    addItemCart(product);
    navigate("/cart");
  }

  if (loading) {
    return (
      <div className="px-3">
        <h4 className="text-center my-8 font-bold">
          Carregando informações...
        </h4>
      </div>
    );
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto my-6">
        {product && (
          <section className="w-full flex flex-col lg:flex-row">
            <img
              className="flex-1 w-full max-h-72 object-contain"
              src={product.cover}
              alt={product.title}
            />

            <div className="flex-1">
              <h1 className="font-bold text-2xl mt-4 mb-2">{product.title}</h1>
              <p className="my-4">{product.description}</p>
              <strong className="text-zinc-700/90">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
              <button
                onClick={() => handleAddItem(product)}
                className="bg-zinc-900 p-1 rounded ml-3"
              >
                <BsCartPlus size={20} color="#fff" />
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
