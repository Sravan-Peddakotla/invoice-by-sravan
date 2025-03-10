import '../App.css'
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Home = () => {
    const productDetails = [
        { "store": "Yummy Punjabi Flavours", "orderID": "9239d580-deee-4c09-af7f-21e7e102a893", "product": "Chana Poori", "quantity": "2", "price": "9.99", "discount_price": "4.99", "order_date": "2025-03-06 19:03:23.007685+00:00", "item_total": "9.98", "tax": "1.2974", "commission": "0.06487000000000001" },
        { "store": "Yummy Punjabi Flavours", "orderID": "6a42e29e-4ab4-48ab-a0af-f5a810258f0e", "product": "Dal Makhni and Tandoori Roti", "quantity": "2", "price": "13.99", "discount_price": "5.99", "order_date": "2025-03-06 11:20:54.279623+00:00", "item_total": "11.98", "tax": "1.5574000000000001", "commission": "0.07787000000000001" },
        { "store": "Yummy Punjabi Flavours", "orderID": "33dcbaf3-982a-4cd6-8377-13a5a4886faf", "product": "Chana Poori", "quantity": "3", "price": "9.99", "discount_price": "4.99", "order_date": "2025-03-06 11:19:31.334745+00:00", "item_total": "14.97", "tax": "1.9461000000000002", "commission": "0.09730500000000002" },
        { "store": "Yummy Punjabi Flavours", "orderID": "4739dcb0-41a4-4477-9633-3fae5e0d4162", "product": "Butter Chicken and garlic naan", "quantity": "1", "price": "15.99", "discount_price": "6.99", "order_date": "2025-03-06 11:20:44.170620+00:00", "item_total": "6.99", "tax": "0.9087000000000001", "commission": "0.045435" },
        { "store": "Yummy Punjabi Flavours", "orderID": "4739dcb0-41a4-4477-9633-3fae5e0d4162", "product": "Chana Poori", "quantity": "2", "price": "9.99", "discount_price": "4.99", "order_date": "2025-03-06 11:20:44.170620+00:00", "item_total": "9.98", "tax": "1.2974", "commission": "0.06487000000000001" },
        { "store": "Yummy Punjabi Flavours", "orderID": "4739dcb0-41a4-4477-9633-3fae5e0d4162", "product": "Dal Makhni and Tandoori Roti", "quantity": "2", "price": "13.99", "discount_price": "5.99", "order_date": "2025-03-06 11:20:44.170620+00:00", "item_total": "11.98", "tax": "1.5574000000000001", "commission": "0.07787000000000001" },
        { "store": "Yummy Punjabi Flavours", "orderID": "79bd2924-8693-46a7-8720-dbd9c1a13160", "product": "Chana Poori", "quantity": "2", "price": "9.99", "discount_price": "4.99", "order_date": "2025-03-06 12:08:46.763910+00:00", "item_total": "9.98", "tax": "1.2974", "commission": "0.06487000000000001" },
        { "store": "Yummy Punjabi Flavours", "orderID": "69970b8c-22e1-4774-b94b-92ec0bafb36f", "product": "Chana Poori", "quantity": "2", "price": "9.99", "discount_price": "4.99", "order_date": "2025-03-06 19:03:57.315956+00:00", "item_total": "9.98", "tax": "1.2974", "commission": "0.06487000000000001" },
        { "store": "Yummy Punjabi Flavours", "orderID": "4a3e9624-a0b5-41f3-8dbc-3e2ad52ecce9", "product": "Dal Makhni and Tandoori Roti", "quantity": "2", "price": "13.99", "discount_price": "5.99", "order_date": "2025-03-06 15:52:15.699986+00:00", "item_total": "11.98", "tax": "1.5574000000000001", "commission": "0.07787000000000001" },
        { "store": "Yummy Punjabi Flavours", "orderID": "7c9bf6ea-ba1a-4a86-a40a-441aa58b11f8", "product": "Dal Makhni and Tandoori Roti", "quantity": "1", "price": "13.99", "discount_price": "5.99", "order_date": "2025-03-06 16:03:07.386937+00:00", "item_total": "5.99", "tax": "0.7787000000000001", "commission": "0.038935000000000004" },
        { "store": "Yummy Punjabi Flavours", "orderID": "d5d05113-083d-4c1c-b019-416cc88717be", "product": "Dal Makhni and Tandoori Roti", "quantity": "1", "price": "13.99", "discount_price": "5.99", "order_date": "2025-03-06 16:05:30.362634+00:00", "item_total": "5.99", "tax": "0.7787000000000001", "commission": "0.038935000000000004" },
        { "store": "Yummy Punjabi Flavours", "orderID": "4755a981-2b5d-47fe-9747-a6f64e70146f", "product": "Chana Poori", "quantity": "2", "price": "9.99", "discount_price": "4.99", "order_date": "2025-03-06 19:01:23.245045+00:00", "item_total": "9.98", "tax": "1.2974", "commission": "0.06487000000000001" },
        { "store": "Yummy Punjabi Flavours", "orderID": "fbbc755b-0163-49b0-a147-5832908bc87a", "product": "Amritsari Kulcha", "quantity": "1", "price": "11.99", "discount_price": "6.99", "order_date": "2025-03-06 19:08:09.687210+00:00", "item_total": "6.99", "tax": "0.9087000000000001", "commission": "0.045435" },
        { "store": "Yummy Punjabi Flavours", "orderID": "331d0df7-1108-4099-9671-6165259ca034", "product": "Dal Makhni and Tandoori Roti", "quantity": "1", "price": "13.99", "discount_price": "5.99", "order_date": "2025-03-06 19:26:22.813648+00:00", "item_total": "5.99", "tax": "0.7787000000000001", "commission": "0.038935000000000004" }
    ]
    const updatedData = productDetails.map((item) => ({
        commission: item.commission,
        discountPrice: item.discount_price,
        itemTotal: item.item_total,
        orderID: item.orderID,
        orderDate: new Date(item.order_date),
        price: item.price,
        product: item.product,
        quantity: item.quantity,
        store: item.store,
        tax: item.tax
    }))
    let subTotal = 0
    for (let i of updatedData) {
        subTotal += parseFloat(i.price) * parseInt(i.quantity)
    }
    let payoutAmount = parseFloat(subTotal) + ((parseFloat(subTotal) * 13) / 100)
    let payAmountWithCom = parseFloat(payoutAmount) + ((parseFloat(payoutAmount) * 5) / 100);
    let fixedPayAmount = payAmountWithCom.toFixed(2);
    const handleDownloadPDF = () => {
        const element = document.getElementById("pdf-content");
        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            pdf.addImage(imgData, "PNG", 16, 16, 190, 0);
            pdf.setFontSize(16);
            pdf.save("Invoice.pdf");
            pdf.setFontSize(24);
            pdf.text("Hello, PDF!", 10, 20);
            pdf.setFontSize(16);
            pdf.text("This content will be saved as a PDF.", 10, 40);
        });
    };
    return (
        <div>
            <div id="pdf-content" >
                <div className='hr-line'>
                    <img src="./iDealMartLogoNew.png" alt="logo" />
                    <p>88 Colgate Ave</p>
                    <p>Toronto, ON M4M 3L1</p>
                    <h1 className="invoice-header">Invoice</h1>
                    <h4 className="semi-header">Submitted On 09/03/2025</h4>
                    <div className='table-margin'>
                    <table className='table  small-table'>
                        <thead>
                            <tr>
                                <th>
                                    Invoice For
                                </th>
                                <th>
                                    Payable to
                                </th>
                                <th>
                                    Invoice #
                                </th>
                                <th>
                                    Due Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Wow Eats</td>
                                <td href="mailto:woweats.ca@gmail.com">woweats.ca@gmail.com</td>
                                <td>WOW20250302</td>
                                <td>10/03/2023</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <hr />
                    <table className="table-margin" >
                        <thead>
                            <tr>
                                <th className="table-header">#</th>
                                <th className="table-header">Date</th>
                                <th className="table-header">Order #</th>
                                <th className="table-header">Product</th>
                                <th className="table-header">Qty</th>
                                <th className="table-header">Unit Price</th>
                                <th className="table-header">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {updatedData.map((item, id) =>
                                <tr className='table-bg' key={id}>
                                    <td>{id + 1}</td>
                                    <td>{new Date(item.orderDate).toLocaleString("EN-gb")}</td>
                                    <td>{item.orderID}</td>
                                    <td>{item.product}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>{item.price * item.quantity}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="footer-cont">
                        <h5>Sub Total : ${subTotal}</h5>
                        <h5>Tax : 13%</h5>
                        <h5>iDeal Mart Commission : 5%</h5>
                        <h4 className="payout-header">Payout Amount : ${fixedPayAmount}</h4>
                    </div>
                </div>
            </div>
            <div className="download-btn-div">
                <button onClick={handleDownloadPDF} type="button" className="download-btn">Download PDF</button>
            </div>
        </div>
    )
}

export default Home