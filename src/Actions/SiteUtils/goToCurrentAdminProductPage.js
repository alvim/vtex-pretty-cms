import { getSkuJson, getVtxctx } from './helpers'

export const method = function goToCurrentAdminProductPage(url, productId) {
    location.href = `https://${url}/admin/Site/ProdutoForm.aspx?id=${productId}`
}

export const getView = () => {
    const { productId } = getSkuJson()
    const { url } = getVtxctx()
    if (!productId || !url) return false

    return {
        name: 'goToCurrentAdminProductPage',
        title: 'Go to product admin',
        description: 'Say hi to the world!',
        args: [url, productId]
    }
}

export default {
    method,
    getView
}