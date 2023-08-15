import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  course = [
    {
      id: 101,
      name: 'C++ for beginners',
      author: 'jhon scamendent',
      duration: 40,
      type: 'free',
      price: 0.0,
      image: 'assets/c+.png',
      description:
        'In this course you will learn the fundamental of javascript',
    },
    {
      id: 101,
      name: 'javaScript for beginners',
      author: 'jhon scamendent',
      duration: 40,
      type: 'paid',
      price: 234,
      image: 'assets/javascript.png/',
      description:
        'In this course you will learn the fundamental of javascript',
    },
    {
      id: 101,
      name: 'react for beginners',
      author: 'jhon scamendent',
      duration: 40,
      type: 'paid',
      price: 899,
      image: 'assets/og.png',
      description:
        'In this course you will learn the fundamental of javascript',
    },
    {
      id: 101,
      name: 'vue for beginners',
      author: 'jhon scamendent',
      duration: 40,
      type: 'primium',
      price: 999,
      image: 'assets/vue.png',
      description:
        'In this course you will learn the fundamental of javascript',
    },
    {
      id: 101,
      name: 'python for beginners',
      author: 'jhon scamendent',
      duration: 40,
      type: 'free',
      price: 0.0,
      image: 'assets/Python-Symbol.png',
      description:
        'In this course you will learn the fundamental of javascript',
    },
    {
      id: 101,
      name: 'ruby for beginners',
      author: 'jhon scamendent',
      duration: 40,
      type: 'paid',
      price: 573,
      image: 'assets/eb9e3b7dab09358e7cf13f188f64f9f4.png',
      description:
        'In this course you will learn the fundamental of javascript',
    },
    {
      id: 101,
      name: 'java for beginners',
      author: 'jhon scamendent',
      duration: 40,
      type: 'free',
      price: 0.0,
      image: 'assets/java.png',
      description:
        'In this course you will learn the fundamental of javascript',
    },
    {
      id: 101,
      name: 'MERN_STACK for beginners',
      author: 'jhon scamendent',
      duration: 40,
      type: 'paid',
      price: 199,
      image: 'assets/Mern.png',
      description:
        'In this course you will learn the fundamental of javascript',
    },

    {
      id: 101,
      name: 'C-Sharp for beginners',
      author: 'jhon scamendent',
      duration: 40,
      type: 'paid',
      price: 400,
      image: 'assets/c.png',
      description:
        'In this course you will learn the fundamental of javascript',
    },
    {
      id: 101,
      name: 'Spring for beginners',
      author: 'jhon scamendent',
      duration: 40,
      type: 'paid',
      price: 200,
      image: 'assets/sp.png',
      description:
        'In this course you will learn the fundamental of javascript',
    },
  ];
}
