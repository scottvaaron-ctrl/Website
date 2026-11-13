---
title: Inventory and auto-ordering agent
summary: An AI agent at Bang Cookies that monitored stock and placed orders, saving roughly one full workday per week.
category: Tech
status: Completed
role: Designer and builder
period: "2026"
tags: [AI agents, Operations]
tools: [Claude, Inventory sheets, Vendor sites]
flow: [Read inventory sheets, Decide what and how much, Order from vendors, Factory and stores]
quote: It was a constant wondering if the agent could complete the task, and when it did we asked, what else?
featured: true
order: 2
---

## Why I built it

Ordering at Bang Cookies was manual and repetitive, and it took roughly a full workday every week.

## How it grew

It started with one question: could it order from Amazon? Once we saw Claude could use a computer, we trained it to go through our vendors' pages and place the orders. We then tested whether it could decide how much to order from our inventory sheets, whether it could track market prices on component parts, and finally whether it could do the same work at the store level as well as the factory.

## What it does

It monitors stock levels, flags items running low, and triggers reorders at both the factory and the stores.

## The result

Roughly one full workday of manual ordering labor saved every week. The bigger change was speed: work that used to take a week took an hour, so the brand could run several tests at once instead of waiting on one.

## What I learned

When an agent handles repetitive work, people can focus on improvement. It freed the team for continuous improvement (Kaizen).
