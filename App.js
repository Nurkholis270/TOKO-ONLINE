
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Produk A",
    price: "Rp150.000",
    image: "https://via.placeholder.com/300x200",
    description: "Deskripsi singkat produk A."
  },
  {
    id: 2,
    name: "Produk B",
    price: "Rp200.000",
    image: "https://via.placeholder.com/300x200",
    description: "Deskripsi singkat produk B."
  }
];

export default function TokoOnline() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Toko Online Modern</h1>
        <p className="text-gray-600">Temukan produk terbaik kami</p>
        <div className="mt-4 max-w-md mx-auto">
          <Input
            placeholder="Cari produk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <Card key={product.id} className="rounded-2xl shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-500 mb-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">{product.price}</span>
                <Button>Beli</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="text-center mt-16 text-sm text-gray-500">
        &copy; 2025 Toko Online Modern. Semua hak dilindungi.
      </footer>
    </div>
  );
}
