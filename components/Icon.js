export const Icon = (props) => {
	switch(props.name){
		case "shopify":
			return <img src="/static/img/shopify.svg" width="50px" height="auto" />
		case "mysql":
			return <img src="/static/img/mysql-5.svg" width="50px" height="auto" />
		case "jquery":
			return <img src="/static/img/jquery-5.svg" width="50px" height="auto" />
		case "php":
			return <img src="/static/img/php-1.svg" width="50px" height="auto" />
		case "graphql":
			return <img src="/static/img/graphql.svg" width="50px" height="auto" />
		case "node":
			return <img src="/static/img/nodejs-icon.svg" width="50px" height="auto" />
		case "react":
			return <img src="/static/img/react.svg" width="50px" height="auto" />
		default:
			return null
	}
}