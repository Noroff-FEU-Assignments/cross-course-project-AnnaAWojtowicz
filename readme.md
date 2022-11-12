# overskrift 1
økøkø

## gfgffgf

### hghghghg



endre på box-shadow til rgba

.material-symbols-outlined:hover {
  border: solid #0d0d0d 2px;
  border-radius: 50%;
  margin: 3px;
  text-shadow: .25px 0px .5px, -.25px 0px .5px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
}







/* shopping */

.shopping-grid {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 30% 70%;
  align-items: start;
}

.shopping__title {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 1;
}

.shopping__price {
  display: flex;
  justify-content: center;
  align-items: center;
}

.shopping__icons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}


.shopping__film-window {
  max-width: 200px;
}


.shopping__film-pic {
  border: solid #d9d9d9 1px;
  border-radius: 0% 0% 24px 0%;
  max-width: 100%;
  height: auto;
}




.shopping__two-buttons {
  position: absolute;
  bottom: 2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
}


.shopping-progress {
  margin-top: 8rem;
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 2.375rem
}

.h1-shopping {
  margin-top: 2.1875rem;
}


.shopping-progress div {
  display: inline-block;
  color: #0D0D0D;
  font-weight: bold;
}

.shopping-progress__number {
  height: 3.375rem;
  width: 3.375rem;
  border: solid #0D0D0D 3px;
  background-color: #d9d9d9;
  border-radius: 50%;
  vertical-align: middle;
}



.shopping-progress__hyphen {
  height: 3.375rem;
  width: 1.875rem;
}


.shopping-progress .your-basket,
.shopping-progress .payment {
  color: #8F8F8F;
  border: solid #8F8F8F 3px;
}

.shopping-progress .your-basket__hyphen {
  color: #8F8F8F;
}

.shopping__total {
  width: 100px;
  margin: auto;
}
