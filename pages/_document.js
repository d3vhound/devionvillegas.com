import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
    })

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, styles: [...initialProps.styles, ...sheet.getStyleElement()] }
  }

  render() {
    return (
      <html>
        <Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" key="viewport" />
				<style dangerouslySetInnerHTML={{__html: `
					@font-face {
						font-family: MaisonNeue;
						src: url(/static/fonts/MaisonNeue/MaisonNeue-Light.otf);
						font-weight: 300;
					}

					@font-face {
						font-family: MaisonNeue;
						src: url(/static/fonts/MaisonNeue/MaisonNeue-Book.otf);
						font-weight: 400;
					}
					
					@font-face {
						font-family: MaisonNeue-Mono;
						src: url(/static/fonts/MaisonNeue/MaisonNeue-Mono.otf);
						font-weight: 400;
					}
					
					@font-face {
						font-family: MaisonNeue;
						src: url(/static/fonts/MaisonNeue/MaisonNeue-Medium.otf);
						font-weight: 500;
					}

					@font-face {
						font-family: MaisonNeue;
						src: url(/static/fonts/MaisonNeue/MaisonNeue-Demi.otf);
						font-weight: bold;
					}

					@font-face {
						font-family: MaisonNeue;
						src: url(/static/fonts/MaisonNeue/MaisonNeue-Bold.otf);
						font-weight: 700;
					}

					html {
						font-size: 64%;
					}

					@media(min-width: 450px) {
						html {
							font-size: 75%
						}
					}

					@media(min-width: 550px) {
						html {
							font-size: 77%
						}
					}

					@media(min-width: 650px) {
						html {
							font-size: 80%
						}
					}

					@media(min-width: 1200px) {
						html {
							font-size: 100%
						}
					}

					@media(min-width: 2200px) {
						html {
							font-size: 110%
						}
					}

					@media(min-width: 2559px) {
						html {
							font-size: 120%
						}
					}
					
					* {
						margin:0;
						padding:0;
						box-sizing: border-box;
					}
					
					body {
						font-family: MaisonNeue;
						font-style: normal;
						background: #000;
						color: #fff;
					}
					
					.gh-activity-item {
						margin-top: 10px;
					}
				`}}/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}