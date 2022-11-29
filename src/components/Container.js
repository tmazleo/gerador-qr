import styles from './Container.module.css'

function Container() {

    function gerarQRCode() {
        const text = document.querySelector('textarea').value;
        const googleApi = 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=';
        const conteudoQR = googleApi + encodeURIComponent(text);
        document.querySelector('#qrCodeImg').src = conteudoQR
    }
    return (
        <section>
            <div className={styles.sec}>
                <h1>Gerar QRCode</h1>
                <img id="qrCodeImg" />
                <div>
                    <textarea maxlenght="400" rows="4"></textarea>
                    <button onClick={gerarQRCode}>Gerar</button>
                </div>
            </div>


        </section>
    )
}

export default Container