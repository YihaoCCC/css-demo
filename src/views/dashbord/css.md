```scss
:root {
    --primary-light: #8abdff;
    --primary: #6d5dfc;
    --primary-dark: #5b0eeb;
    
    --white: #FFFFFF;
    --greyLight-1: #E4EBF5;
    --greyLight-2: #c8d0e7;
    --greyLight-3: #bec8e4;
    --greyDark: #9baacf;
}


$inner-shadow: inset .2rem .2rem .5rem var(--greyLight-2), 
inset -.2rem -.2rem .5rem var(--white);
$shadow: .3rem .3rem .6rem var(--greyLight-2), 
-.2rem -.2rem .5rem var(--white);

.components {
    width: 75rem;
    height: 40rem;
    border-radius: 3rem;
    background: #E4EBF5;
    padding: 4rem;
    display: grid;
    grid-template-columns: 17.6rem 19rem 20.4rem;
    grid-template-rows: repeat(autofit, min-content);
    grid-column-gap: 5rem;
    grid-row-gap: 2.5rem;
    align-items: center;
    .switch {
        width: 6rem;
        input {
            display: none;
            &:checked {
                & ~ label {
                    &::before { opacity: 1; }
                    &::after {
                        left: 57%; 
                        background: #E4EBF5;
                    }
                }
            }
        }
        label {
            display: flex;
            align-items: center;
            width: 100%;
            height: 3rem;
            box-shadow: 6px 6px 12px #c5c5c5,
                        -6px -6px 12px #ffffff;
            background: rgba(255,255,255,0);
            position: relative;
            cursor: pointer;
            border-radius: 1.6rem;
            &::after {
                content: "";
                position: absolute;
                left: .4rem;
                width: 2.1rem;
                height: 2.1rem;
                border-radius: 50%;
                background: var(--main-color);
                transition: all .4s ease;
            }
            &::before {
                content: '';
                width: 100%;
                height: 100%;
                border-radius: inherit;
                background: linear-gradient(330deg, #5b0eeb 0%, #6d5dfc 50%, #8abdff 100%);
                opacity: 0;
                transition: all .4s ease;
            }
        }
        
    }
}
.segmented-control {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  width: 20.4rem;
  height: 4rem;
  box-shadow: .3rem .3rem .6rem #d1daf6, 
              -.2rem -.2rem .5rem #FFFFFF;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  position: relative;

  input { display: none; }

  > input:checked + label {
      transition: all .5s ease;
      color: var(--main-color);
    }

  &__1, &__2, &__3 {
    width: 6.8rem;
    height: 3.6rem;
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: var(--greyDark);
    transition: all .5s ease;

    &:hover { color: var(--main-color); }
  }

  &__color {
    position: absolute;
    height: 3.4rem;
    width: 6.2rem;
    margin-left: .3rem;
    border-radius: .8rem;
    box-shadow: inset .2rem .2rem .5rem #c8d0e7, 
                inset -.2rem -.2rem .5rem #fff;
    pointer-events: none;

  }
}

#tab-1:checked ~ .segmented-control__color {
  transform: translateX(0);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
#tab-2:checked ~ .segmented-control__color {
  transform: translateX(6.8rem);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
#tab-3:checked ~ .segmented-control__color {
  transform: translateX(13.6rem);
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
```