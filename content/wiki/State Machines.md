Finite State Machines are a model of computation that obey the following rules:
- FSMs are always in one of a finite number of states.
- A FSM might go from one state to another based on an input
	- this is called a *state transition*
	- the input might be called an *event* or *action*
- A FSM has an initial state

## State Transitions [[Stochasticity]]
State transitions can be stochastic as in [nondeterministic finite automaton](https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton). This means that there's a probability that, given an action, a state transition from `s` to `s'` will happen.

#cs