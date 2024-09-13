Bellman equation tells us what is the value of an action according to an [[Action Policy is a function that returns an action given an state|action policy]]. The value of an action is the present reward/payoff plus the discounted future possible payoffs.

Future payoffs/rewards are discounted because, in a [[Stochasticity|stochastic]] process, we are uncertain about the future. In a deterministic process, there shouldn't be a discount rate. (maybe, even in that case, there should be if the "[[One dollar today is more valuable than one dollar tomorrow]]" rule applies).

This is similar to the [[Discounted Cash Flows is a way of valuing an asset|discount cash flow]] way of analysing the value of an asset. Maybe we could say that the DCF is a specialization/application of the Bellman Equation? 

TODO: add equation here

Resources:
- See "Bellman Equation" https://scholar.harvard.edu/files/basilico/files/laibson_notes_2013_0.pdf
- Bellman Equation Wiki: https://en.wikipedia.org/wiki/Bellman_equation#Example

--- 
*Note to self:*
Interesting that this has application in both Computer Science and Economics. The connection between this and DCF was striking!

---

#cs #econ #incomplete 