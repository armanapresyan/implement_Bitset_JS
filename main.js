class Bitset {
  constructor(size) {
    this.size = size;
    this.bits = new Uint32Array(Math.ceil(size / 32));
  }
  set(position) {
    const mask = 1 << (position % 32);
    const index = Math.floor(position / 32);
    this.bits[index] |= mask;
  }
  
  reset(position) {
    const mask = 1 << (position % 32);
    const index = Math.floor(position / 32);
    this.bits[index] &= ~mask;
  }

  flip() {
    for (let i = 0; i < this.bits.length; ++i) {
      this.bits[i] = ~this.bits[i];
    }
  }

  check() {
    for (let i = 0; i < this.bits.length; ++i) {
      if (this.bits[i] !==  0xFFFFFFFF) {
        return false;
      }
    }
    return true;
  }

  checkOne() {

    for (let i = 0; i < this.bits.length; ++i) {
        if(this.bits[i] !== 0){
            return true;
        }
        return false;
    }
  }
  countOne() {
    let count = 0;
    for(let i = 0; i < this.bits.length; ++i){
        let bits = this.bits[i];
        while (bits) {
          count += bits & 1;
          bits >>= 1;
        }
    }
    return count;
  }

  print() {
    let str = "";
    for (let i = 0; i < this.bits.length; ++i) {
        str += this.bits[i].toString(2).padStart(32, "0");
    }
    console.log(str);
  }
}


