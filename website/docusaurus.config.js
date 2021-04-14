/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    // Basic Stuff
    title: 'EDB',
    tagline: '',
    url: 'https://angelnull.github.io/expandable-djs-bot',
    baseUrl: '/website',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.png',
    organizationName: 'angelnull',
    projectName: 'expandable-djs-bot',
    // Theme configuration
    themeConfig: {
        hideableSidebar: false,
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: true,
            switchConfig: {
                darkIcon: '🌙',
                lightIcon: '\u2600',
                darkIconStyle: {
                    marginLeft: '2px',
                },
                lightIconStyle: {
                    marginLeft: '1px',
                },
            },
        },
        // Navigation bar
        navbar: {
            title: 'Expandable-DJS-Bot',
            logo: {
                alt: 'Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Documentation',
                    position: 'left',
                },
                {
                    href: 'https://github.com/angelnull/expandable-djs-bot',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub Repository',
                },
            ],
            hideOnScroll: true,
        },
        // Footer
        footer: {
            style: 'dark',
            logo: {
                alt: 'Logo',
                src: 'img/footer.png',
            },
            copyright: `Copyright © ${new Date().getFullYear()} AngelNull - Licensed Under MIT`,
        },
    },
    // Plugins, presets, other
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/AngelNull/expandable-djs-bot/tree/main/website/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
