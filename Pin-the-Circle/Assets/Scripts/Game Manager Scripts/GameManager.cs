using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using UnityEngine;

public class GameManager : MonoBehaviour
{

    public static GameManager instance;

    private Button shootBtn;

    [SerializeField]
    private GameObject needle;

    private GameObject[] gameNeedles;

    [SerializeField]
    private int howManyNeedles;

    private float needleDistance = .68f;
    private int needleIndex = 0;

    

    // Start is called before the first frame update
    void Awake()
    {
        if(instance == null)
        {
            instance = this;
        }
        GetButton();
    }

    void Start()
    {
        CreateNeedles();
    }

    // Update is called once per frame
    void Update()
    {
        
    }


    void GetButton()
    {
        shootBtn = GameObject.Find("Shoot Button").GetComponent<Button>();
        shootBtn.onClick.AddListener(() => ShootTheNeedle());
    }

    public void ShootTheNeedle()
    {
        gameNeedles[needleIndex].GetComponent<NeedleMovementScript>().FireTheNeedle();
        needleIndex++;

        if(needleIndex == gameNeedles.Length)
        {
            Debug.Log("The Game Is Finished");
            shootBtn.onClick.RemoveAllListeners();
        }
    }

    void CreateNeedles()
    {
        gameNeedles = new GameObject[howManyNeedles];
        Vector3 temp = transform.position;

        for(int i = 0; i < gameNeedles.Length; i++)
        {
            gameNeedles[i] = Instantiate(needle, temp, Quaternion.identity) as GameObject ;
            temp.y -= needleDistance;
        }
    }

    public void InstantiateNeedle()
    {
        Instantiate(needle, transform.position, Quaternion.identity);
    }
}
