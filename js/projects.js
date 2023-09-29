class Slider {
    constructor(query){
        this.slider = document.querySelector(query)
        this.sliders = [...this.slider.querySelectorAll(".slider-slide")]
        this.currentSlide = Math.max(0, this.sliders.findIndex(el => el.classList.contains("is-active")))
        this.createPrevNext()
        this.createPagination()
        this.time = null
        this.handleMouseEnterAndOut()
        this.setSlide(this.currentSlide)
    }

    createPrevNext(){
        this.btnPrev = document.createElement("button")
        this.btnPrev.type = "button"
        this.btnPrev.innerText = "Poprzedni slajd"
        this.btnPrev.classList.add("slider-button", "slider-button-prev")
        this.btnPrev.addEventListener("click", this.slidePrev.bind(this))

        this.btnNext = document.createElement("button")
        this.btnNext.type = "button"
        this.btnNext.innerText = "Następny slajd"
        this.btnNext.classList.add("slider-button", "slider-button-next")
        this.btnNext.addEventListener("click", this.slideNext.bind(this))
        
        const nav = document.createElement("div")
        nav.classList.add("slider-nav")
        this.slider.append(this.btnPrev)
        this.slider.append(this.btnNext)
        this.slider.append(nav)
    }

    slidePrev(){
        this.currentSlide--
        if(this.currentSlide < 0) {
            this.currentSlide = this.slide.length - 1
        }
        this.setSlide(this.currentSlide)
    }

    slideNext() {
        this.currentSlide++
        if(this.currentSlide > this.sliders.length - 1) {
            this.currentSlide = 0
        }
        this.setSlide(this.currentSlide)
    }

    setSlide(index) {
        this.sliders.forEach(slide => {
            slide.classList.remove("is-active")
        })

        this.sliders[index].classList.add("is-active")
        const dots = [...this.dots.children]
        dots.forEach(dot => dot.classList.remove("is-active"))
        dots[index].classList.add("is-active")
        this.currentSlide = index

        clearTimeout(this.time)
        this.time = setTimeout(() => this.slideNext(), 6000)
    }

    createPagination() {
        this.dots = document.createElement("div")
        this.dots.classList.add("slider-pagination")

        this.sliders.forEach((el, i) => {
            const btn = document.createElement("button")
            btn.classList.add("slider-pagination-button")
            btn.type = "button"
            btn.innerText = i + 1
            btn.addEventListener("click", () => this.setSlide(i))
            this.dots.append(btn)
        })
        this.slider.append(this.dots)
    }

    handleMouseEnterAndOut() {
        this.slider.addEventListener("mouseenter", () => clearTimeout(this.time))
        this.slider.addEventListener("mouseout", () => {
            clearTimeout(this.time)
            this.time = setTimeout(() => this.slideNext(), 6000)
        })
    }
}

const slider = new Slider("#mySlider")
