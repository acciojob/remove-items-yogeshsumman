//your JS code here. If required.
function removeColor() {
    // Get the select element
    let select = document.getElementById("colorSelect");
    
    // Remove the selected option
    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }
}