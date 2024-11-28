export default function CheckoutPage() {
  return (
    <div>
      This the CheckoutPage
      <form className="p-4">
        <label>
          Nome completo:
          <input
            type="text"
            name="name"
            placeholder="Nome Completo ou apelido"
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="numero de telefone ou email"
          />
        </label>
        <label htmlFor="">
          Endereço:
          <input
            type="text"
            name="address"
            placeholder="endereco Localizacao bairro rua etc..."
          />
        </label>
        <label>
          Metodo de Pagamento:
          <input
            type="text"
            name="number"
            placeholder="TPA transferencia bancaria dinheiro vivo etc...  "
          />
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Enviar
        </button>
      </form>
      <div className="p-4">
        <h1>Resumo da compras:</h1> 
        <ul className="flex flex-col gap-4">
            <li>quantidade das compras: <b>14</b></li>
            <li>valor total da compra: <b>R$ 14.900,00</b></li>
        </ul>
        </div>
    </div>
  );
}
