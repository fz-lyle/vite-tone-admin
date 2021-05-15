import defaultSettings from '@config/setting.config.js'

const title = defaultSettings.title || 'vite-rbac-admin'

const getPageTitle = (pageTitle) => {
    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }

    return `${title}`
}

export default getPageTitle