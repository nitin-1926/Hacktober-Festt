import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';
//import 'dart:math' as math;

void main() {
  runApp(MaterialApp(
    theme:
        ThemeData(primaryColor: Colors.red, accentColor: Colors.yellowAccent),
    debugShowCheckedModeBanner: false,
    home: SplashScreen(),
  ));
}

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> with SingleTickerProviderStateMixin{
  AnimationController _controller;
  Animation<double> _animation;

  @override
  void initState() {
  super.initState();

  _controller = AnimationController(
  vsync: this,
  duration: const Duration(
  milliseconds: 6000,
  ),
  );

  _animation =  new CurvedAnimation(parent: _controller, curve: Curves.easeInOut)
  ..addListener(() {
  setState(() {});
  });

  _controller.forward();
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: new AppBar(
        backgroundColor: Colors.white,
        title: new Text('Your own milk booth',style : TextStyle(
          color: Colors.red,
          fontWeight: FontWeight.bold,
          fontStyle: FontStyle.italic,
        )),
      ),
        body: Stack(fit: StackFit.expand, children: <Widget>[
      Container(decoration: BoxDecoration(color: Colors.redAccent),),
      Column(
        children: <Widget>[
          Expanded(
              flex: 1,
                  child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  CircleAvatar(
                      backgroundColor: Colors.white,
                      radius: 50.0,
                      child: Icon(
                        Icons.mail,
                        color: Colors.greenAccent,
                        size: 50.0,
                      )),
                  Padding(
                    padding: EdgeInsets.only(top: 10.0),
                  ),
                  Text('Milkiway',
                      style: TextStyle(
                          color: Colors.white,
                          fontSize: 24.0,
                          fontWeight: FontWeight.bold)),
                ],
              )),
          Expanded(
              flex: 3,
              child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    //CircularProgressIndicator(backgroundColor: Colors.green),
                    Padding(
                      padding: EdgeInsets.only(top: 20.0),
                    ),
                    CircularStepProgressIndicator(
                      totalSteps: 100,
                      currentStep: 10,
                      selectedColor: Colors.blueAccent,
                      unselectedColor: Colors.grey[100],
                      width: 100,
                      height: 100,
                      padding: 0,
                      selectedStepSize: 10.0,
                    ),
                  Padding(
                    padding: EdgeInsets.all(20.0)
                  ),
                  Text("Online Milk Delivery \n for everyone",
                        style: TextStyle(
                            color: Colors.white,
                            fontSize: 18.0,
                            fontWeight: FontWeight.bold))
              ]))
        ],
      )
    ]));
  }
}
