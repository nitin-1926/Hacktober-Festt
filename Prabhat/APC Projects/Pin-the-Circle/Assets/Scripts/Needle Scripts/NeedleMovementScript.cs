using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NeedleMovementScript : MonoBehaviour
{
    // Start is called before the first frame update

    [SerializeField]
    private GameObject needleBody;

    private bool canFireNeedle;
    private bool touchedTheCircle;

    public float forceY = 2f;

    private Rigidbody2D myBody;

    void Awake()
    {
        Initialize();
        //FireTheNeedle();
    }

    void Initialize()
    {
        needleBody.SetActive(false);
        myBody = GetComponent<Rigidbody2D>();
    }


    // Update is called once per frame
    void Update()
    {
        if (canFireNeedle)
        {
            myBody.velocity = new Vector2(0, forceY);
        }
        //else
        //{
        //    myBody.bodyType = RigidbodyType2D.Kinematic;
        //}
    }
    public void FireTheNeedle()
    {
        needleBody.SetActive(true);
        myBody.bodyType = RigidbodyType2D.Dynamic;
        canFireNeedle = true;
        //Debug.Log("H");
    }

    public void OnTriggerEnter2D(Collider2D target)
    {
        if (touchedTheCircle)
            return;
        if (target.tag == "Circle")
        {
            canFireNeedle = false;
            touchedTheCircle = true;
            myBody.bodyType = RigidbodyType2D.Static;
            gameObject.transform.SetParent(target.transform);
            //Debug.Log("H");
        }
    }




}
