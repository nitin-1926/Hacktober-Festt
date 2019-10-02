using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CircleRotateScript : MonoBehaviour
{

    [SerializeField]
    private float rotataionSpeed = 8f;

    private bool canRotate;


    private float angle;
    // Start is called before the first frame update
    void Awake()
    {
        canRotate = true;
    }

    // Update is called once per frame
    void Update()
    {
        if (canRotate)
        {
            RotateTheCircle();
        }
    }

    void RotateTheCircle()
    {
        angle = transform.rotation.eulerAngles.z;
        angle += rotataionSpeed * Time.deltaTime;
        transform.rotation = Quaternion.Euler(new Vector3(0, 0, angle));
    }
}
