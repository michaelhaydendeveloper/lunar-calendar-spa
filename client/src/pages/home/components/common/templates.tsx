const goalFormPanelHeaderTemplate = (title: string) => {
    return (
        <div className="p-panel-header">
            <div 
                className="p-panel-title"
            >
                {title}
            </div>
            <div></div>
            <div 
                className="p-panel-icons"
            >
            </div>
        </div>
    )
}

export {
    goalFormPanelHeaderTemplate
}