```css
.input {
    position: relative;
    height: 40px;
    width: 200px;
    color: #666;
    input {
        width: inherit;
        height: inherit;    
        outline: none;
        border-radius: 3px;
        box-sizing: border-box;
        transition: all .3s ease;
        padding-left: 10px;
        color: var(--theme-font-deeper);
        background-color: var(--theme-rightContent-color);
        &:focus, &:valid {
            border: 2px solid var(--main-color);
            & ~ label {
                color: var(--main-color);
                transform: translateY(-20px) translateX(-5px);
                font-size: 12px;
                border-radius: 4px;
            }
        }
    }
    
    label {
        position: absolute;
        top: 20%;
        left: 8%;
        height: 20px;
        color: #666;
        padding: 0 3px;
        box-sizing: border-box;
        transition: all .3s ease-in-out;
        background-color: var(--theme-rightContent-color);
    }
}

```