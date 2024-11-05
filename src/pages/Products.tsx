import CardProduct from "../components/ui/CardProduct"

export default function ProductsPage() {
  return (
    <>
      <div className="flex justify-center my-3">
        <h1 className="text-2xl font-semibol">List of Page</h1>
      </div>
      <div className="mx-10 my-7">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          
        </div>
      </div>
    </>
  );
}
