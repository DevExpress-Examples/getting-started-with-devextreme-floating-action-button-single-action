$(function() {
    DevExpress.config({
        floatingActionButtonConfig: {
            position: {
                my: "right bottom",
                at: "right bottom",
                of: "#app-container",
                offset: "-16 -16"
            }
        }
    });

    $("#action-edit").dxSpeedDialAction({
        hint: "Edit",
        icon: "icon ion-md-create",
        onClick: function() {
            showNotification("Edit is clicked");
        }
    });

    function showNotification(message) {
        DevExpress.ui.notify({
            message: message,
            position: {
                my: "left bottom",
                at: "left bottom",
                of: "#app-container",
                offset: "16 -16"
            },
            minWidth: null,
            width: $("#app-container").width() * 0.7
        }, "info", 1000);
    }
});