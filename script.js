const $toggleSwitch = document.getElementById('toggle-theme');

onSetup()
$toggleSwitch.addEventListener('click', onToggle)

function onToggle() {
    let theme = $html.getAttribute('data-theme')
    theme = (theme === "light") ? "dark" : "light"
    $html.setAttribute('data-theme', theme)
}

function onSetup() {
    let theme = $html.getAttribute('data-theme')
    $toggleSwitch.checked = (theme === 'dark')
}