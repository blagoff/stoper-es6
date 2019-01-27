class Stopwatch extends React.Component{

    constructor(props) {
    super(props);
    this.state = {
        times: {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        }
    };
    this.running = false;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this); 

    print() {
        this.display.innerText = this.format(this.times);
    }

    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
            }
    }

    calculate() {
        this.times.miliseconds += 1;

    if (this.times.miliseconds >= 100){
        this.times.seconds += 1;
        this.times.miliseconds = 0;
    }

    if (this.times.seconds >= 60) {
        this.times.minutes += 1;
        this.times.seconds = 0;
        }
    }

    stop() {
        this.running = false;
        clearInterval(this.watch);
    }


    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }
}

render() {
        
        return (
          <div className="container">
            <nav className="controls">
                <a className="button dark" href="#" onClick={this.start}>
                    Start
                </a>
                <a className="button normal" href="#" onClick={this.stop}> 
                    Stop 
                </a>
            </nav>
            <div className="results"></div>
           
          </div>
        );
      }
}



function pad0(value) {
    let result = value.toString();

    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

